import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	const formData = await request.formData();

	const newTodo = await prisma.todo.create({
		data: {
			title: String(formData.get("title")),
			task: String(formData.get("task")),
			author: { connect: { id: 1 } },
		},
	});

	return NextResponse.json({
		todo: newTodo,
	});
}
