import React from 'react'
import { Menu } from 'semantic-ui-react'


export default function Sidebar() {
    return (
        <div className="sidebar">
            <Menu inverted vertical>
                <Menu.Item
                    name='candidate'
                />
                <Menu.Item
                    name='employer'
                />
                <Menu.Item
                    name='jobAdvert'
                />
            </Menu>
        </div>
    )
}
