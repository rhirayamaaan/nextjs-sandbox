import React, { AnchorHTMLAttributes } from 'react'
import NextLink from 'next/link'

type Props = {
  className?: string
  onClick?: AnchorHTMLAttributes<HTMLAnchorElement>['onClick']
  onKeyPress?: AnchorHTMLAttributes<HTMLAnchorElement>['onKeyPress']
} & React.ComponentProps<typeof NextLink>

export const Link: React.VFC<Props> = ({ className, onClick, onKeyPress, children, href, ...nextLinkProps }) => <NextLink href={href} {...nextLinkProps}>
  <a className={className} onClick={onClick} onKeyPress={onKeyPress}>{children}</a>
</NextLink>
