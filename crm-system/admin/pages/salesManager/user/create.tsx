import * as React from 'react'
import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { UserForm } from '../../../components/forms/UserForm'
import { SlotSources, Title } from '../../../components/Slots'
import { useInviteUser } from '../../../hooks/useInviteUser'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {

	const invite = useInviteUser([{ role: 'salesRepresentative', variables: [] }])
	const inviteRef = React.useRef(invite)
	inviteRef.current = invite
	
	return (
		<>
			<Title>
				Create user
			</Title>
			<CreateScope
				entity="User"
				redirectOnSuccess="salesManager/user/detail(id: $entity.id)"
				onBeforePersist={accessor => inviteRef.current(accessor)}
			>
				<SlotSources.Actions>
					<PersistButton labelSave="Create user" labelSaved="Create user" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="salesManager/user/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Users
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<UserForm />
				</>
			</CreateScope>
		</>
	)
}
