import { NextPageWithLayout } from 'next'
import { LayoutContainer } from '../containers/layouts'
import { FormContainer } from '../containers/templates/Form'

const Form: NextPageWithLayout = () => <FormContainer />

Form.getLayout = (page) => <LayoutContainer>{page}</LayoutContainer>

export default Form
