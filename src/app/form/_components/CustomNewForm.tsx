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

export default function TabsDemo() {
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
						<div className="space-y-1">
							<Label htmlFor="username">Budget</Label>
							<Input type="radio" />
							<Input type="radio" />
							<Input type="radio" />
						</div>
					</CardContent>
					<CardFooter>
						<Button>Shop Now</Button>
					</CardFooter>
				</Card>
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
							<Label htmlFor="username">Budget</Label>
							<Input type="radio" />
							<Input type="radio" />
							<Input type="radio" />
						</div>
					</CardContent>
					<CardFooter>
						<Button>Enquire Now</Button>
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
