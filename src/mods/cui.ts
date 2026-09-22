function ShowMessageDialog(msg: string) {
    const session = pfcGetCurrentSession();
    session.UIShowMessageDialog(msg);
}

export = {
    ShowMessageDialog
};