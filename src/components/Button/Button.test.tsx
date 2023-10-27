import {render, screen} from "@testing-library/react";

import Button from "./Button";

describe('Button Component', () => {
    test('Button element should gets rendered', () => {
        const onClickSpy = jest.fn();
        render (<Button label="Primary" isDisabled onClick={onClickSpy}/>);
        const btnEle = screen.getByRole('button');
        expect(btnEle).toBeInTheDocument();
    });

    test('should render primary button', () => {
        const onClickSpy = jest.fn();
        render (<Button label="Secondary" isDisabled onClick={onClickSpy}/>);
        expect(screen.getByRole('button')).toHaveTextContent('Secondary');
        screen.getByRole('button').click();
        expect(onClickSpy).toHaveBeenCalled();
    });

});