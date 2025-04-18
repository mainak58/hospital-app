import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "@/components/Navbar";

import "@testing-library/jest-dom";
// Mock the next/navigation hooks
jest.mock("next/navigation", () => ({
    useRouter: () => ({
        push: jest.fn(),
    }),
}));

// Mock the next/link component
jest.mock("next/link", () => {
    return ({
        children,
        href,
    }: {
        children: React.ReactNode;
        href: string;
    }) => {
        return <a href={href}>{children}</a>;
    };
});

// Mock clerk hooks and components
jest.mock("@clerk/nextjs", () => ({
    SignedIn: ({ children }: { children: React.ReactNode }) => (
        <div data-testid="signed-in">{children}</div>
    ),
    SignedOut: ({ children }: { children: React.ReactNode }) => (
        <div data-testid="signed-out">{children}</div>
    ),
    SignInButton: ({ children }: { children: React.ReactNode }) => (
        <div data-testid="sign-in-button">{children}</div>
    ),
    SignUpButton: ({ children }: { children: React.ReactNode }) => (
        <div data-testid="sign-up-button">{children}</div>
    ),
    UserButton: () => <div data-testid="user-button">User Button</div>,
    useUser: () => ({
        user: {
            id: "test-user-id",
        },
    }),
}));

// Mock the Lucide icons
jest.mock("lucide-react", () => ({
    Menu: () => <div data-testid="menu-icon">Menu Icon</div>,
    X: () => <div data-testid="close-icon">Close Icon</div>,
}));

describe("Navbar Component", () => {
    test("renders the logo with correct text", () => {
        render(<Navbar />);
        const logoElement = screen.getByText("HealthCare+");
        expect(logoElement).toBeInTheDocument();
    });

    test("renders navigation links", () => {
        render(<Navbar />);

        const homeLink = screen.getByText("Home");
        const appointmentLink = screen.getByText("Appointment");
        const aboutUsLink = screen.getByText("About Us");

        expect(homeLink).toBeInTheDocument();
        expect(appointmentLink).toBeInTheDocument();
        expect(aboutUsLink).toBeInTheDocument();
    });

    test("renders SignedOut section with sign-in and sign-up buttons", () => {
        render(<Navbar />);

        const signedOutSection = screen.getByTestId("signed-out");
        expect(signedOutSection).toBeInTheDocument();

        const signInButton = screen.getByText("Sign In");
        const signUpButton = screen.getByText("Sign Up");

        expect(signInButton).toBeInTheDocument();
        expect(signUpButton).toBeInTheDocument();
    });

    test("renders SignedIn section with UserButton and My Appointments button", () => {
        render(<Navbar />);

        const signedInSection = screen.getByTestId("signed-in");
        expect(signedInSection).toBeInTheDocument();

        const userButton = screen.getByTestId("user-button");
        const myAppointmentsButton = screen.getByText("My Appointments");

        expect(userButton).toBeInTheDocument();
        expect(myAppointmentsButton).toBeInTheDocument();
    });

    test("initially renders with menu closed on mobile", () => {
        render(<Navbar />);

        const menuIcon = screen.getByTestId("menu-icon");
        expect(menuIcon).toBeInTheDocument();

        // Mobile menu should not be visible initially
        const mobileMenu = screen.queryByText("Create Account");
        expect(mobileMenu).not.toBeVisible();
    });

    test("opens mobile menu when toggle button is clicked", () => {
        render(<Navbar />);

        // Initially menu is closed with menu icon visible
        const menuButton = screen.getByLabelText("Toggle Menu");
        expect(screen.getByTestId("menu-icon")).toBeInTheDocument();

        // Click to open menu
        fireEvent.click(menuButton);

        // Close icon should now be visible
        expect(screen.getByTestId("close-icon")).toBeInTheDocument();

        // Mobile menu should be visible
        const mobileMenu = screen.getAllByText("Home")[1]; // The second "Home" is in the mobile menu
        expect(mobileMenu).toBeVisible();
    });

    test("closes mobile menu when a nav item is clicked", () => {
        render(<Navbar />);

        // Open the menu first
        const menuButton = screen.getByLabelText("Toggle Menu");
        fireEvent.click(menuButton);

        // Get the mobile Home link and click it
        const mobileLinks = screen.getAllByText("Home");
        const mobileHomeLink = mobileLinks[mobileLinks.length - 1]; // Last "Home" is in mobile menu
        fireEvent.click(mobileHomeLink);

        // Menu should be closed after clicking
        const closeIcon = screen.queryByTestId("close-icon");
        expect(closeIcon).not.toBeInTheDocument();
    });

    test("routes to myappointments when My Appointments button is clicked", () => {
        const { push } = require("next/navigation").useRouter();
        render(<Navbar />);

        const myAppointmentsButton = screen.getByText("My Appointments");
        fireEvent.click(myAppointmentsButton);

        expect(push).toHaveBeenCalledWith("myappointments?id=test-user-id");
    });

    test("has correct styling for desktop navigation", () => {
        render(<Navbar />);

        // Check header has fixed position and shadow
        const header = screen.getByRole("banner");
        expect(header).toHaveClass("fixed");
        expect(header).toHaveClass("shadow-sm");

        // Check desktop nav is hidden on mobile but visible otherwise
        const nav = header.querySelector("nav");
        expect(nav).toHaveClass("hidden");
        expect(nav).toHaveClass("md:flex");
    });

    test("properly toggles between menu and close icons", () => {
        render(<Navbar />);

        const toggleButton = screen.getByLabelText("Toggle Menu");

        // Initially shows menu icon
        expect(screen.getByTestId("menu-icon")).toBeInTheDocument();
        expect(screen.queryByTestId("close-icon")).not.toBeInTheDocument();

        // Click to open menu
        fireEvent.click(toggleButton);

        // Should now show close icon
        expect(screen.queryByTestId("menu-icon")).not.toBeInTheDocument();
        expect(screen.getByTestId("close-icon")).toBeInTheDocument();

        // Click to close menu
        fireEvent.click(toggleButton);

        // Should show menu icon again
        expect(screen.getByTestId("menu-icon")).toBeInTheDocument();
        expect(screen.queryByTestId("close-icon")).not.toBeInTheDocument();
    });
});
