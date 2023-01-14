interface TitleProps {
  children: React.ReactNode;
  classes: string;
}

const Title = ({ children, classes }: TitleProps) => (
  <h1 className={classes}>{children}</h1>
);

export default Title;
