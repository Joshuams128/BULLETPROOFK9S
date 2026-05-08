import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return NextResponse.json(
      { reviews: [], rating: 0, total: 0, error: "Missing API configuration" },
      { status: 200 }
    );
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`;

    const res = await fetch(url, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error(`Google API responded with ${res.status}`);
    }

    const data = await res.json();

    if (data.status !== "OK") {
      return NextResponse.json(
        { reviews: [], rating: 0, total: 0, error: data.status },
        { status: 200 }
      );
    }

    return NextResponse.json({
      reviews: data.result?.reviews ?? [],
      rating: data.result?.rating ?? 0,
      total: data.result?.user_ratings_total ?? 0,
    });
  } catch (err) {
    return NextResponse.json(
      { reviews: [], rating: 0, total: 0, error: "Failed to fetch reviews" },
      { status: 200 }
    );
  }
}
