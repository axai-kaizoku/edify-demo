'use client';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function CustomNewForm() {
	function handleShop(e: any) {
		e.preventDefault();
		const name = e.target[0].value;
		const phone = e.target[1].value;
		const budget = e.target['budget'].value;

		console.log('shop form', name, phone, budget);
	}
	return (
		<Tabs
			defaultValue="account"
			className="w-[400px]">
			<h1 className="text-3xl text-center font-semibold font-manuale p-6">
				Enquire Now
			</h1>
			<TabsList className="grid w-full grid-cols-3">
				<TabsTrigger value="shop">Shop</TabsTrigger>
				<TabsTrigger value="bulk-order">Bulk Order</TabsTrigger>
				<TabsTrigger value="affiliate">Affiliate</TabsTrigger>
			</TabsList>
			<TabsContent value="shop">
				<form onSubmit={handleShop}>
					<Card>
						<CardHeader>
							<CardTitle>Shop</CardTitle>
							<CardDescription>
								{`
							Make changes to your account here. Click save when you're done.
							`}
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-2">
							<div className="space-y-1">
								<Label htmlFor="name">Full Name</Label>
								<Input id="name" />
							</div>
							<div className="space-y-1">
								<Label htmlFor="username">Phone Number</Label>
								<Input id="username" />
							</div>
							<div className="space-y-1">
								<Label htmlFor="budget">Budget</Label>
								<div className="flex gap-8 py-4">
									<input
										type="radio"
										name="budget"
										id="15k-20k"
										value="15k-20k"
										className="sr-only"
									/>
									<Label
										htmlFor="15k-20k"
										className="border p-2 rounded-md">
										15k-20k
									</Label>
									<input
										type="radio"
										name="budget"
										id="20k-25k"
										value="20k-25k"
										className="sr-only"
									/>
									<Label
										htmlFor="20k-25k"
										className="border p-2 rounded-md">
										20k-25k
									</Label>
									<input
										type="radio"
										name="budget"
										id="25k-30k"
										value="25k-30k"
										className="sr-only"
									/>
									<Label
										htmlFor="25k-30k"
										className="border p-2 rounded-md">
										25k-30k
									</Label>
								</div>
							</div>
						</CardContent>
						<CardFooter>
							<Button>Shop Now</Button>
						</CardFooter>
					</Card>
				</form>
			</TabsContent>
			<TabsContent value="bulk-order">
				<Card>
					<CardHeader>
						<CardTitle>Bulk Order</CardTitle>
						<CardDescription>
							{`
							Make changes to your account here. Click save when you're done.
							`}
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-2">
						<div className="space-y-1">
							<Label htmlFor="name">Name</Label>
							<Input
								id="name"
								defaultValue="Pedro Duarte"
							/>
						</div>
						<div className="space-y-1">
							<Label htmlFor="username">Username</Label>
							<Input
								id="username"
								defaultValue="@peduarte"
							/>
						</div>
						<div className="space-y-1">
							<Label htmlFor="budget">Budget</Label>
							<div className="flex gap-8 py-4">
								<input
									type="radio"
									name="budget"
									id="15k-20k"
									value="15k-20k"
									className="sr-only"
								/>
								<Label
									htmlFor="15k-20k"
									className="border p-2 rounded-md">
									15k-20k
								</Label>
								<input
									type="radio"
									name="budget"
									id="20k-25k"
									value="20k-25k"
									className="sr-only"
								/>
								<Label
									htmlFor="20k-25k"
									className="border p-2 rounded-md">
									20k-25k
								</Label>
								<input
									type="radio"
									name="budget"
									id="25k-30k"
									value="25k-30k"
									className="sr-only"
								/>
								<Label
									htmlFor="25k-30k"
									className="border p-2 rounded-md">
									25k-30k
								</Label>
							</div>
						</div>
					</CardContent>
					<CardFooter>
						<Button type="submit">Enquire Now</Button>
					</CardFooter>
				</Card>
			</TabsContent>
			<TabsContent value="affiliate">
				<Card>
					<CardHeader>
						<CardTitle>Shop</CardTitle>
						<CardDescription>
							{`
							Make changes to your account here. Click save when you're done.
							`}
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-2">
						<div className="space-y-1">
							<Label htmlFor="name">Name</Label>
							<Input
								id="name"
								defaultValue="Pedro Duarte"
							/>
						</div>
						<div className="space-y-1">
							<Label htmlFor="username">Username</Label>
							<Input
								id="username"
								defaultValue="@peduarte"
							/>
						</div>
					</CardContent>
					<CardFooter>
						<Button>Start Selling</Button>
					</CardFooter>
				</Card>
			</TabsContent>
		</Tabs>
	);
}
