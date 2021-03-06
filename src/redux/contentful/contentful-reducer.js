import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    contentData: {},
    name: "",
    qualities: [],
    themes: [],
    education: [],
    skills: [],
    programmingLanguages: [],
    themesData: {},
}

const contentfulSlice = createSlice({
    name: 'engine',
    initialState,
    reducers: {
        fitData(state, action) {
            state.contentData = action.payload
            state.name = action.payload.name
            state.qualities = action.payload.qualities
            state.themesData = action.payload.themeData
            state.education = action.payload.education
            state.skills = action.payload.skills
            state.programmingLanguages = action.payload.programmingLanguages
            const themes = Object.keys(action.payload.themeData)
            const arr = []
            for (let i of themes) {
                arr.push({value: i, label: i})
            }
            state.themes = arr
        }
    }
})

export const { fitData } = contentfulSlice.actions
export default contentfulSlice