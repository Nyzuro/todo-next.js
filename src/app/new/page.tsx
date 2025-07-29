import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Page() {
	return (
		<Card className="">
			<CardHeader>
				<CardTitle>Create to-do</CardTitle>
			</CardHeader>

			<CardContent>
				<form
					action="/api/to-do"
					method="post
					"
				>
					<Label>
						Title
						<Input name="title" />
					</Label>
					<Label>
						Task
						<Input name="task" />
					</Label>
					<Button type="submit">Submit</Button>
				</form>
			</CardContent>
		</Card>
	);
}
