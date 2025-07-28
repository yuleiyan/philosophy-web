import { Link } from "react-router-dom";

import React from "react";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

interface NavTrailProps extends React.HTMLAttributes<HTMLDivElement> {
    elements: { path: string; name: string }[];
}

export function NavTrail({ elements, ...props }: NavTrailProps) {
    return (
        <Breadcrumb className="mb-8" {...props}>
            <BreadcrumbList>
                {elements.map(({ path, name }, index) => (
                    <React.Fragment key={index}>
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link to={path}>{name}</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        {index < elements.length - 1 && <BreadcrumbSeparator />}
                    </React.Fragment>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    );
}
