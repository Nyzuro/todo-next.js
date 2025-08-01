"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormStatus } from "react-dom";
import { createTodoAction } from "./todo.action";

export default function Page() {
	const createTodo = async (FormData: FormData) => {
		const todoAction = await createTodoAction({
			title: String(FormData.get("title")),
			task: String(FormData.get("task")),
		});
	};

	return (
		<Card className="">
			<CardHeader>
				<CardTitle>Create to-do</CardTitle>
			</CardHeader>

			<CardContent>
				<form
					action={async (FormData) => {
						await createTodo(FormData);
					}}
				>
					<Label>
						Title
						<Input name="title" />
					</Label>
					<Label>
						Task
						<Input name="task" />
					</Label>
					<SubmitButton />
				</form>
			</CardContent>
		</Card>
	);
}

const SubmitButton = () => {
	const { pending } = useFormStatus();

	return (
		<Button disabled={pending} type="submit">
			{pending ? "Loading..." : "Submit"}
		</Button>
	);
};
