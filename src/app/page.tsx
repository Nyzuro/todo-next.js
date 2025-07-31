import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default async function Page() {
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
			</CardContent>
		</Card>
	);
}
