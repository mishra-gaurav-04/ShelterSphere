import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {ListingsCards} from "./ListingsCards";

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
            <TabsContent value="mybookings">My Bookings.</TabsContent>
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
