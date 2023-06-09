import * as React from "react";
type Props = {
  fill?: string;
};
export const Dashboard = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>, { fill }: Props) => (
  <>
    <div className="lg:block hidden">
      <svg
        width={17}
        height={17}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.2192 2.20646C3.7856 2.20646 1 4.99046 1 8.42566C1 11.8609 3.784 14.6465 7.2192 14.6465C10.6544 14.6465 13.4384 11.8625 13.4384 8.42566H7.2192V2.20646ZM15 7.71366C15 5.99686 14.304 4.44166 13.1792 3.31686L8.7808 7.71366H15ZM8.0064 1.35046V7.56806L12.4032 3.17126C11.1888 1.95686 9.5968 1.35046 8.0064 1.35046Z"
          //   fill="#0A459F"
          fill={fill}
        />
      </svg>
    </div>
    <div className="lg:hidden block">
      <svg
        width={22}
        height={22}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M7.2192 2.20646C3.7856 2.20646 1 4.99046 1 8.42566C1 11.8609 3.784 14.6465 7.2192 14.6465C10.6544 14.6465 13.4384 11.8625 13.4384 8.42566H7.2192V2.20646ZM15 7.71366C15 5.99686 14.304 4.44166 13.1792 3.31686L8.7808 7.71366H15ZM8.0064 1.35046V7.56806L12.4032 3.17126C11.1888 1.95686 9.5968 1.35046 8.0064 1.35046Z"
          //   fill="#0A459F"
          fill={fill}
        />
      </svg>
    </div>
  </>
);
