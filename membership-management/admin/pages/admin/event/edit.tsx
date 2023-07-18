import * as React from 'react'
import { EditScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { EventForm } from '../../../components/forms/EventForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Edit event
			</Title>
			<EditScope entity="Event(id=$id)" redirectOnSuccess="admin/event/detail(id: $entity.id)">
				<SlotSources.Back>
					<LinkButton to="admin/event/detail(id: $entity.id)" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Detail
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<PersistButton />
				</SlotSources.Actions>
				<EventForm />
			</EditScope>
		</>
	)
}
