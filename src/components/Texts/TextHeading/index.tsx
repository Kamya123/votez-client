// Utils
import { cn } from '../../../utils/helper';

interface TextHeadingProps {
    children: React.ReactNode;
    className?: string;
}

const TextHeading: React.FC<TextHeadingProps> = ({ children, className = '' }) => {
    return <h1 className={cn('text-2xl font-bold text-primary', className)}>{children}</h1>;
};

export default TextHeading;
