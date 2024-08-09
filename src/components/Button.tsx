import React from 'react';
import Icon from './Icon';

interface IButtonProps {
    id?: string;
    title?: string | number;
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
    className?: string;
    disabled?: boolean;
    icon?: string;
    onClick?: () => void;
    position?: 'left' | 'right';
    children?: React.ReactNode;
    onPlay?: () => void;
    iconSize?: string;
    refer?: any;
}

export default function Button({ title, children, type, className, icon, onClick, onPlay, position = "left", iconSize, refer, disabled = false, ...propriedades }: IButtonProps) {
    const defaultStyle = 'w-full h-10 bg-[var(--indigo)] text-white font-bold rounded-lg hover:bg-[var(--success-hover)]';
    
    return (
        <button ref={refer} type={!type ? 'button' : type} className={`${!className ? defaultStyle : className} ${disabled ? 'btn-disabled' : ''}`} disabled={disabled} onPlay={onPlay} onClick={onClick} {...propriedades}>
            {icon && position === 'left' && <Icon icon={icon} className={`w-4 h-4 ${iconSize}`} />}
            {title}
            {children}
            {icon && position === 'right' && <Icon icon={icon} className={`w-4 h-4 ${iconSize}`} />}
        </button>
    )
}