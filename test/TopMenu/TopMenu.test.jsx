import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import TopMenu from "../../components/TopMenus/TopMenu";

describe("Testing top menu", () => {
    test("Testing Menu and its items", () => {
        render(<TopMenu/>)

        const heading = screen.getByRole('heading', {
            name: /The restaurant title/i,
        })

        expect(heading).toBeInTheDocument()
    })
})
