import React, { AnchorHTMLAttributes } from 'react'
import NextLink from 'next/link'

type Props = {
  className?: string
  onClick?: AnchorHTMLAttributes<HTMLAnchorElement>['onClick']
  onKeyPress?: AnchorHTMLAttributes<HTMLAnchorElement>['onKeyPress']
} & React.ComponentProps<typeof NextLink>

export const Link: React.VFC<Props> = ({
  onClick,
  onKeyPress,
  children,
  ...nextLinkProps
}) => (
  <NextLink onClick={onClick} onKeyPress={onKeyPress} {...nextLinkProps}>
    {children}
  </NextLink>
)
