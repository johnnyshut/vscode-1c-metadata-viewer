export interface PredefinedDataFile {
	PredefinedData: PredefinedData;
}

export interface PredefinedData {
	Item: PredefinedDataItem[];
}

interface PredefinedDataItem {
	ChildItems: PredefinedData[];
	Code: string[];
	Description: string[];
	IsFolder: string[];
	Name: string[];
}