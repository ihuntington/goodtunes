export const Spacer: React.FC<{ size?: 4 | 8 }> = ({ size = 8 }) => (
    <div className={`h-${size}`}></div>
);