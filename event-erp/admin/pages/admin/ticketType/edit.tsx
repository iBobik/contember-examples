import * as React from 'react'
import { EditScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { TicketTypeForm } from '../../../components/forms/TicketTypeForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Edit ticket type
			</Title>
			<EditScope entity="TicketType(id=$id)" redirectOnSuccess="admin/ticketType/detail(id: $entity.id)">
				<SlotSources.Back>
					<LinkButton to="admin/ticketType/detail(id: $entity.id)" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Detail
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<PersistButton />
				</SlotSources.Actions>
				<TicketTypeForm />
			</EditScope>
		</>
	)
}
