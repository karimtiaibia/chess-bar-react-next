import React from "react";
import StyledLayout from "./StyledLayout";
import Head from "next/head";

export const metadata = {
    title: "Chess Bar",
    description: "Site web de Chess Bar",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <StyledLayout>{children}</StyledLayout>
        </html>
    );
}
