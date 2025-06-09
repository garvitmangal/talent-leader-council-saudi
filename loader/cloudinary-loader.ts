interface CloudinaryLoaderProps {
    src: string;
    width: number;
    quality?: number;
}

export default function cloudinaryLoader({ src, width, quality }: CloudinaryLoaderProps) {
    const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality || 'auto'}`]
    return `https://res.cloudinary.com/people-matters/image/upload/${params.join(',')}${src}`
}