import { mount } from "enzyme";
import { AppRouter } from "../../../components/09-useContext/AppRouter";
import { UserContext } from "../../../components/09-useContext/UserContext";

describe('pruebas en <AppRouter/>', () => {
    const user = {
        id:1,
        name:'daniel'
    }
    const wrapper  = mount(
        <UserContext.Provider value={{user}}>
            <AppRouter/>
        </UserContext.Provider>);
    
    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
})
