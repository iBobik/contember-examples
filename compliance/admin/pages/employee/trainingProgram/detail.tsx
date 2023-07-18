import * as React from 'react'
import { Box, DetailScope, DisplayTextField, LinkButton, Stack } from '@contember/admin'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Training program detail
			</Title>
			<DetailScope entity="TrainingProgram(id=$id)">
				<SlotSources.Back>
					<LinkButton to="employee/trainingProgram/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Training programs
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<Stack direction="vertical" gap="xlarge">
					<Box className="box">
						<Stack direction="vertical">
							<div className="box-item">
								<DisplayTextField field="title" label="Title" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="description" label="Description" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="startDate" label="Start date" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="endDate" label="End date" labelPosition="labelLeft" />
							</div>
						</Stack>
					</Box>
				</Stack>
			</DetailScope>
		</>
	)
}
