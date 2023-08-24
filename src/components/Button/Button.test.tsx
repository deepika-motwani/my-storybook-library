// import {render, screen} from "@testing-library/react";

// import { Button } from "./Button";

// /**
//  * @jest-environment jsdom
//  */

// describe('Button Component', () => {
//     test('Button element should gets rendered', () => {
//         const onClickSpy = jest.fn();
//         render (<Button variant="primary" children="Primary" handleClick={onClickSpy}/>);
//         const btnEle = screen.getByRole('button');
//         expect(btnEle).toBeInTheDocument();
//     });

//     test('should render primary button', () => {
//         const onClickSpy = jest.fn();
//         render (<Button variant="primary" children="Primary" handleClick={onClickSpy}/>);
//         expect(screen.getByRole('button')).toHaveTextContent('Primary');
//         screen.getByRole('button').click();
//         expect(onClickSpy).toHaveBeenCalled();
//     });

// });