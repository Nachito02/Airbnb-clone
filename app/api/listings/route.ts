import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { error } from "console";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();

  const {
    title,
    description,
    price,
    imageSrc,
    category,
    roomCount,
    bathRoomCount,
    guestCount,
    location,
  } = body;

  //   Object.keys(body).forEach((value: any) => {
  //     console.log("eskere");
  //     if (!body[value]) {
  //       NextResponse.error();
  //     }
  //   });

  try {
    const listing = await prisma.listing.create({
      data: {
        title,
        description,
        imageSrc,
        category,
        roomCount,
        bathRoomCount,
        guestCount,
        locationValue: location.value,
        price: parseInt(price, 10),
        userId: currentUser.id,
      },
    });

    console.log(listing);
    return NextResponse.json(listing);
  } catch (error) {
    console.log(error);
  }
}
