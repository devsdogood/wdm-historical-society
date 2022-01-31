import React from "react";
import { INavigationMenuFields } from "@src/types/generated/contentful";
import NavigationMenu from "@components/NavigationMenu";
import menuData from '@utils/menu.preval';

const AppLayout: React.FC = ({ children }) => {
    const menu = menuData as INavigationMenuFields;
    const menuItems = menu.menuItems!;

    return (
        <>
            <NavigationMenu menuItems={menuItems} />
            <section style={{'maxWidth': '1000px', 'margin': '0 auto'}}>{children}</section>
        </>
    );
};

export default AppLayout;
