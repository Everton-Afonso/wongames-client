import Button from '../../../../UI/Button'

import * as S from '../../styles'

const RegisterBox = () => {
  return (
    <S.RegisterBox>
      <Button fullWidth size="large">
        Log in now
      </Button>

      <span>or</span>

      <a href="#" title="Sign Up">
        Sign Up
      </a>
    </S.RegisterBox>
  )
}

export default RegisterBox
