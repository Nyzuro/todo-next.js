"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function createTodoAction(todo: { title: string; task: string }) {
	try {
		await prisma.todo.create({
			data: {
				title: todo.title,
				task: todo.task,
				author: { connect: { id: 1 } },
			},
		});
	} catch {
		return {
			error: "Error while creating the citation.",
		};
	}

	redirect("/");
}
