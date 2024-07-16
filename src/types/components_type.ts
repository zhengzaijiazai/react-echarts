import { Button } from 'antd';
// globalTitle
export interface TitleProps {
    title: string
}

// homeRender
export interface HomeRenderItem {
    id: number,
    name: string,
    path: string
}
export type HomeRenderItemArr = HomeRenderItem[]
export interface HomeRenderProps {
    data: HomeRenderItemArr,
    title: string,
    type: number
}

// outside组件
export interface outsideProps {
    title: string,
    children: JSX.Element
}

// button
export interface ButtonProps {
    title?: string,
    type?: ButtonType,
    onclick?: () => void,
    size?: "large" | "middle" | "small"
}
export type ButtonType = "success" | "primary" | "danger" | "warning" | "default";
