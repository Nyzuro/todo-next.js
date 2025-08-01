import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function Page() {
	const todoList = await prisma.todo.findMany({
		orderBy: {
			createdAt: "desc",
		},
	});

	return (
		<Card>
			<CardHeader>
				<CardTitle>Welcome</CardTitle>
			</CardHeader>

			<CardContent className="flex flex-col gap-4">
				<Link
					className={buttonVariants({ size: "lg", variant: "outline" })}
					href="todos/new"
				>
					Create a to-do list
				</Link>

				{todoList.map((todo) => (
					<Card className="p-4" key={todo.id}>
						<CardHeader>
							<CardTitle>
								<p>{todo.title}</p>
							</CardTitle>
						</CardHeader>
						<p>{todo.task}</p>
					</Card>
				))}
			</CardContent>
		</Card>
	);
}
