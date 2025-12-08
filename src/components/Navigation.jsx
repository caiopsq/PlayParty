import { Badge, NavLink } from "@mantine/core";
import { useState } from "react";
import { Barcode } from "lucide-react";

function Navigation() {
    return (
        <div>
            <NavLink
                href="http://example.com/home"
                label="With icon"
                leftSection={<Barcode size="1rem" />}
            />
        </div>
    );
}

export default Navigation;