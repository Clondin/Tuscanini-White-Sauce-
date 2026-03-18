import { useState, type ImgHTMLAttributes } from 'react';

interface SkeletonImageProps extends ImgHTMLAttributes<HTMLImageElement> {}

const SkeletonImage = ({ className = '', style, onLoad, ...props }: SkeletonImageProps) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className="relative" style={{ display: 'contents' }}>
            {!loaded && (
                <div
                    className={`skeleton-shimmer absolute inset-0 ${className}`}
                    style={style}
                />
            )}
            <img
                className={className}
                style={{
                    ...style,
                    opacity: loaded ? 1 : 0,
                    transition: 'opacity 0.4s ease',
                }}
                onLoad={(e) => {
                    setLoaded(true);
                    onLoad?.(e);
                }}
                {...props}
            />
        </div>
    );
};

export default SkeletonImage;
