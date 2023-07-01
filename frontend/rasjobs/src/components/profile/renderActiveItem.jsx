import HistoryGeneric from './historyGeneric';
import InformationForm from './information';
import AddListGeneric from './addListGeneric';

export default function renderActiveItem(item, skills, addSkills, removeSkill) {
	switch (item.id) {
		case 1:
			return <InformationForm />;
		case 2:
			return (
				<HistoryGeneric
					title='Position Title'
					name='workHistoryTitle'
					id='work-experrience-form-title'
					name2='companyName'
					id2='work-experrience-form-company'
					title2='Company Name'
					checkBoxLable='Is this your current position?'
					textAreaLable='Describe your role'
					textAreaDescription='Write a brief description of your role'
					textAreaDescriptionName='textAreaDescription'
					textAreaId='work-experrience-form-description'
					btnName='Add Your Work History'
					checkBoxName='checkCurrent'
					checkBoxId='durationCheckBox'
					startDateName='startDate'
					startDateId='startDuration'
					endDateName='endDate'
					endDateId='endDuration'
					initalState={{
						workHistoryTitle: '',
						companyName: '',
						checkCurrent: false,
						startDate: '',
						endDate: '',
						workDescription: '',
						textAreaDescription: '',
					}}
				/>
			);
		case 3:
			return (
				<AddListGeneric
					inputType='text'
					inputId='skillsInput'
					inputName='skillsInput'
					placeHolder='Add skills to Stand Out'
					btnName='Add skill'
					initalState={{ skillsInput: '' }}
					skills={skills}
					addSkills={addSkills}
					removeSkill={removeSkill}
				/>
			);
		case 4:
			return (
				<HistoryGeneric
					title='Area of Study'
					name='areaOfStudy'
					id='areaOfStudy-form-title'
					name2='schoolName'
					id2='areaOfStudy-form-company'
					title2='School Name'
					checkBoxLable='Are you currently enrolled here?'
					textAreaLable='Describe your area of study'
					textAreaDescription='Write a brief description of what you are majoring'
					textAreaDescriptionName='textAreaDescription'
					textAreaId='areaOfStudy-form-description'
					btnName='Add Your Educational History'
					checkBoxName='checkCurrent'
					checkBoxId='areaOfStudydurationCheckBox'
					startDateName='startDate'
					startDateId='areaOfStudystartDuration'
					endDateName='endDate'
					endDateId='areaOfStudyendDuration'
					initalState={{
						areaOfStudy: '',
						schoolName: '',
						checkCurrent: false,
						startDate: '',
						endDate: '',
						workDescription: '',
						textAreaDescription: '',
					}}
				/>
			);
		case 5:
			return (
				<AddListGeneric
					inputId='webInput'
					inputName='webInput'
					placeHolder='Porifolio and Social Media Links'
					btnName='Add Websites '
					initalState={{ webInput: '' }}
					skills={skills}
					addSkills={addSkills}
					removeSkill={removeSkill}
					inputType = 'url'
				/>
			);
		case 6:
			return (
				<AddListGeneric
					inputId='certificatesInput'
					inputName='certificatesInput'
					placeHolder="List Name's of Your Certificates"
					btnName='Add Cerificates '
					initalState={{ certificatesInput: '' }}
					skills={skills}
					addSkills={addSkills}
					removeSkill={removeSkill}
					inputType='text'
				/>
			);
		default:
			return;
	}
}
