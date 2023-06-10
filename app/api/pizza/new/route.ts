import { prisma } from "@/lib/prisma";

export const POST = async (req: Request) => {
  const { userId, borderType, sauceType, message, ingredients, price } =
    await req.json();

  try {
    const response = await prisma.pizza.create({
      data: {
        borderType,
        sauceType,
        ingredients,
        costumerId: userId,
        message,
        price,
      },
    });

    return new Response(JSON.stringify(response), { status: 201 });
  } catch (error) {
    return new Response("falha ao criar a pizza", { status: 500 });
  }
};
