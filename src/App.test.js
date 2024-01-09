import {render,screen} from  "@testing-library/react";
import { fireEvent } from "@testing-library/react";
import App from './App';

describe("App",()=>{
  it("Should display a board ",()=>{
    render(<App/>);
    const gameBoard=screen.getByTestId("gameBoard");
    expect(gameBoard).not.toBeNull();
    expect(gameBoard.textContent).toBe("Next player: X");

  });

  it("should render a button",()=>{
    render(< App />);
    const button=screen.getAllByRole("button");
    expect(button).not.toBeNull();
  })

  it("Should render 9 button",()=>{
    render(<App/>);
    const buttons=screen.getAllByRole("button");
    expect(buttons.length).toBe(9);
  });

  it("should be display X at the first move",()=>{
    render(<App/>);
    const button=screen.getAllByRole("button")[0];
    fireEvent.click(button);
    expect(button.textContent).toBe("X");
  });

  it("should render O on the second move",()=>{
    render(<App/>);
    const square=screen.getAllByRole("button");
    fireEvent.click(square[0]);
    expect(square[0].textContent).toBe("X");
    fireEvent.click(square[1]);
    expect(square[1].textContent).toBe("O");
  });

  it("should display token on the square only when it is empty ",()=>{
    render(<App/>);
    const square=screen.getAllByRole("button");
    fireEvent.click(square[0]);
    expect(square[0].textContent).toBe("X");
    fireEvent.click(square[0]);
    expect(square[0].textContent).toBe("X");
  });

  it("should be able to calculate winner",()=>{
    render(<App/>);
    const squares=screen.getAllByRole("button");
    const status=screen.getByTestId("status");
    fireEvent.click(squares[0]);
    fireEvent.click(squares[1]);
    fireEvent.click(squares[3]);
    fireEvent.click(squares[4]);
    fireEvent.click(squares[6]);
    fireEvent.click(squares[7]);
    expect(status.textContent).toBe("Winner: X");
  });
  

});