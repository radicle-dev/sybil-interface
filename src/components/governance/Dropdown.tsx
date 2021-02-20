import React, { useRef } from 'react'
import styled from 'styled-components'
import { useActiveProtocol } from '../../state/governance/hooks'
import { RowBetween, RowFixed } from '../Row'
import { WrappedListLogo } from './styled'
import { TYPE } from '../../theme'

const Wrapper = styled.div<{ backgroundColor?: string; open: boolean }>`
  width: 100%;
  height: fit-content;
  position: relative;
  padding: 1rem;
  border-radius: 20px;
  user-select: none;
  background-color: ${({ backgroundColor }) => backgroundColor ?? 'white'};
  z-index: 3;
  border-bottom-left-radius: ${({ open }) => (open ? '0px' : '20px')};
  border-bottom-right-radius: ${({ open }) => (open ? '0px' : '20px')};
`

export default function Dropdown() {
  const [activeProtocol] = useActiveProtocol()

  const ref = useRef(null)

  return (
    <Wrapper backgroundColor={activeProtocol?.secondaryColor} onClick={() => {}} open={false} ref={ref}>
      <RowBetween>
        <RowFixed style={{ gap: '16px' }}>
          <WrappedListLogo src={activeProtocol?.logo} />
          <TYPE.mediumHeader color={activeProtocol?.primaryColor}>{activeProtocol?.name}</TYPE.mediumHeader>
        </RowFixed>
      </RowBetween>
    </Wrapper>
  )
}
