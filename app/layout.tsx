'use client'
import { Flowbite } from 'flowbite-react'
import { FC, PropsWithChildren } from 'react'
import { BiBuoy } from 'react-icons/bi'
import {
	HiArrowSmRight,
	HiChartPie,
	HiInbox,
	HiShoppingBag,
	HiTable,
	HiUser,
	HiViewBoards
} from 'react-icons/hi'
import Header from './components/header'
import Sidebar from './components/sidebar'
import { SidebarProvider } from './context/SidebarContext'
import './globals.css'
const RootLayout: FC<PropsWithChildren> = function ({ children }) {
	return (
		<html lang="en">
			<body>
				<Flowbite>
					<SidebarProvider>
						<Header />
						<div className="flex dark:bg-black">
							<main className="order-2 mx-4 mt-4">{children}</main>
							<div className="order-1">
								<ActualSidebar />
							</div>
						</div>
					</SidebarProvider>
				</Flowbite>
			</body>
		</html>
	)
}

function ActualSidebar(): JSX.Element {
	return (
		<Sidebar>
			<Sidebar.Items className="dark:bg-black">
				<Sidebar.ItemGroup>
					<Sidebar.Item href="#" icon={HiChartPie}>
						Dashboard
					</Sidebar.Item>
					<Sidebar.Item href="#" icon={HiViewBoards}>
						Kanban
					</Sidebar.Item>
					<Sidebar.Item href="#" icon={HiInbox}>
						Inbox
					</Sidebar.Item>
					<Sidebar.Item href="#" icon={HiUser}>
						Users
					</Sidebar.Item>
					<Sidebar.Item href="#" icon={HiShoppingBag}>
						Products
					</Sidebar.Item>
					<Sidebar.Item href="#" icon={HiArrowSmRight}>
						Sign In
					</Sidebar.Item>
					<Sidebar.Item href="#" icon={HiTable}>
						Sign Up
					</Sidebar.Item>
				</Sidebar.ItemGroup>
				<Sidebar.ItemGroup>
					<Sidebar.Item href="#" icon={HiChartPie}>
						Upgrade to Pro
					</Sidebar.Item>
					<Sidebar.Item href="#" icon={HiViewBoards}>
						Documentation
					</Sidebar.Item>
					<Sidebar.Item href="#" icon={BiBuoy}>
						Help
					</Sidebar.Item>
				</Sidebar.ItemGroup>
			</Sidebar.Items>
		</Sidebar>
	)
}

export default RootLayout
