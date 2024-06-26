declare namespace ScotGov.Component {
    interface Image extends Partial<React.HTMLProps<HTMLImageElement>> {
        caption?: string,
        ratio?: true | AspectBox.Ratio,
    }
}
