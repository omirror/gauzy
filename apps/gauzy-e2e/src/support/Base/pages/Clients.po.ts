import {
	verifyElementIsVisible,
	clickButtonByIndex,
	clickButton,
	clearField,
	enterInput,
	clickKeyboardBtnByKeycode,
	clickElementByText,
	waitElementToHide
} from '../utils/util';
import { ClientsPage } from '../pageobjects/ClientsPageObject';

export const gridBtnExists = () => {
	verifyElementIsVisible(ClientsPage.gridButtonCss);
};

export const gridBtnClick = (index) => {
	clickButtonByIndex(ClientsPage.gridButtonCss, index);
};

export const addButtonVisible = () => {
	verifyElementIsVisible(ClientsPage.addButtonCss);
};

export const clickAddButton = () => {
	clickButton(ClientsPage.addButtonCss);
};

export const nameInputVisible = () => {
	verifyElementIsVisible(ClientsPage.nameInputCss);
};

export const enterNameInputData = (data) => {
	clearField(ClientsPage.nameInputCss);
	enterInput(ClientsPage.nameInputCss, data);
};

export const emailInputVisible = () => {
	verifyElementIsVisible(ClientsPage.emailInputCss);
};

export const enterEmailInputData = (data) => {
	clearField(ClientsPage.emailInputCss);
	enterInput(ClientsPage.emailInputCss, data);
};

export const phoneInputVisible = () => {
	verifyElementIsVisible(ClientsPage.phoneInputCss);
};

export const enterPhoneInputData = (data) => {
	clearField(ClientsPage.phoneInputCss);
	enterInput(ClientsPage.phoneInputCss, data);
};

export const countryInputVisible = () => {
	verifyElementIsVisible(ClientsPage.countryInputCss);
};

export const enterCountryInputData = (data) => {
	clearField(ClientsPage.countryInputCss);
	enterInput(ClientsPage.countryInputCss, data);
};

export const cityInputVisible = () => {
	verifyElementIsVisible(ClientsPage.cityInpuCss);
};

export const enterCityInputData = (data) => {
	clearField(ClientsPage.cityInpuCss);
	enterInput(ClientsPage.cityInpuCss, data);
};

export const postcodeInputVisible = () => {
	verifyElementIsVisible(ClientsPage.postcodeinputCss);
};

export const enterPostcodeInputData = (data) => {
	clearField(ClientsPage.postcodeinputCss);
	enterInput(ClientsPage.postcodeinputCss, data);
};

export const streetInputVisible = () => {
	verifyElementIsVisible(ClientsPage.streetInputCss);
};

export const enterStreetInputData = (data) => {
	clearField(ClientsPage.streetInputCss);
	enterInput(ClientsPage.streetInputCss, data);
};

export const projectDropdownVisible = () => {
	verifyElementIsVisible(ClientsPage.projectsDropdownCss);
};

export const clickProjectDropdown = () => {
	clickButton(ClientsPage.projectsDropdownCss);
};

export const selectProjectFromDropdown = (text) => {
	clickElementByText(ClientsPage.projectsDropdownOptionCss, text);
};

export const selectEmployeeDropdownVisible = () => {
	verifyElementIsVisible(ClientsPage.usersMultyselectCss);
};

export const clickSelectEmployeeDropdown = () => {
	clickButton(ClientsPage.usersMultyselectCss);
};

export const selectEmployeeDropdownOption = (index) => {
	clickButtonByIndex(ClientsPage.checkUsersMultyselectCss, index);
};

export const tagsMultyselectVisible = () => {
	verifyElementIsVisible(ClientsPage.addTagsDropdownCss);
};

export const clickTagsMultyselect = () => {
	clickButton(ClientsPage.addTagsDropdownCss);
};

export const selectTagsFromDropdown = (index) => {
	clickButtonByIndex(ClientsPage.tagsDropdownOption, index);
};

export const websiteInputVisible = () => {
	verifyElementIsVisible(ClientsPage.websiteInputCss);
};

export const enterWebsiteInputData = (data) => {
	clearField(ClientsPage.websiteInputCss);
	enterInput(ClientsPage.websiteInputCss, data);
};

export const clickKeyboardButtonByKeyCode = (keycode) => {
	clickKeyboardBtnByKeycode(keycode);
};

export const saveButtonVisible = () => {
	verifyElementIsVisible(ClientsPage.saveButtonCss);
};

export const clickSaveButton = () => {
	clickButton(ClientsPage.saveButtonCss);
};

export const inviteButtonVisible = () => {
	verifyElementIsVisible(ClientsPage.inviteButtonCss);
};

export const clickInviteButton = () => {
	clickButton(ClientsPage.inviteButtonCss);
};

export const saveInvitebuttonVisible = () => {
	verifyElementIsVisible(ClientsPage.saveInviteButtonCss);
};

export const clickSaveInviteButton = () => {
	clickButton(ClientsPage.saveInviteButtonCss);
};

export const tableRowVisible = () => {
	verifyElementIsVisible(ClientsPage.selectTableRowCss);
};

export const selectTableRow = (index) => {
	clickButtonByIndex(ClientsPage.selectTableRowCss, index);
};

export const editButtonVisible = () => {
	verifyElementIsVisible(ClientsPage.editButtonCss);
};

export const clickEditButton = () => {
	clickButton(ClientsPage.editButtonCss);
};

export const deleteButtonVisible = () => {
	verifyElementIsVisible(ClientsPage.deleteButtonCss);
};

export const clickDeleteButton = () => {
	clickButton(ClientsPage.deleteButtonCss);
};

export const confirmDeleteButtonVisible = () => {
	verifyElementIsVisible(ClientsPage.confirmDeleteButtonCss);
};

export const clickConfirmDeleteButton = () => {
	clickButton(ClientsPage.confirmDeleteButtonCss);
};

export const clickCardBody = () => {
	clickButton(ClientsPage.cardBodyCss);
};

export const waitMessageToHide = () => {
	waitElementToHide(ClientsPage.toastrMessageCss);
};

export const contactNameInputVisible = () => {
	verifyElementIsVisible(ClientsPage.clientNameCss);
};

export const enterClientNameData = (data) => {
	clearField(ClientsPage.clientNameCss);
	enterInput(ClientsPage.clientNameCss, data);
};

export const clientPhoneInputVisible = () => {
	verifyElementIsVisible(ClientsPage.clientPhoneCss);
};

export const enterClientPhoneData = (data) => {
	clearField(ClientsPage.clientPhoneCss);
	enterInput(ClientsPage.clientPhoneCss, data);
};

export const clientEmailInputVisible = () => {
	verifyElementIsVisible(ClientsPage.clientEmailCss);
};

export const enterClientEmailData = (data) => {
	clearField(ClientsPage.clientEmailCss);
	enterInput(ClientsPage.clientEmailCss, data);
};
