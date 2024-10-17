import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {ListingsCards} from "./ListingsCards";
import { MyBookingsTable } from './MyBookingsTable';

export const ProfileTabs = () => {
    return (
        <Tabs defaultValue="account" className="w-full">
            <TabsList>
                <TabsTrigger value="mylistings">My Listings</TabsTrigger>
                <TabsTrigger value="mybookings">My Bookings</TabsTrigger>
                <TabsTrigger value="savedplaces">Saved Places</TabsTrigger>
            </TabsList>
            <TabsContent value="mylistings" className='flex flex-col gap-2'>
                <ListingsCards/>
                <ListingsCards/>
                <ListingsCards/>
                <ListingsCards/>
                <ListingsCards/>
                <ListingsCards/>
            </TabsContent>
            <TabsContent value="mybookings">
                <MyBookingsTable/>
            </TabsContent>
            <TabsContent value="savedplaces" className='flex flex-col gap-2'>
                <ListingsCards/>
                <ListingsCards/>
                <ListingsCards/>
                <ListingsCards/>
                <ListingsCards/>
                <ListingsCards/>
                <ListingsCards/>
                <ListingsCards/>
                <ListingsCards/>
                <ListingsCards/>
                <ListingsCards/>
            </TabsContent>
        </Tabs>

    )
}
