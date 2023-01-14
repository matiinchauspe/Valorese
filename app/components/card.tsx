interface CardProps {
  children: React.ReactNode;
}

const Card = ({ children }: CardProps) => (
  <div className="border border-gray-200 rounded-md shadow-lg p-6 min-w-[200px]">
    {children}
  </div>
);

export default Card;
