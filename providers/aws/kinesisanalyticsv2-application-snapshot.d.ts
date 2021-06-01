import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Kinesisanalyticsv2ApplicationSnapshotConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot.html#application_name Kinesisanalyticsv2ApplicationSnapshot#application_name}.
     */
    readonly applicationName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot.html#snapshot_name Kinesisanalyticsv2ApplicationSnapshot#snapshot_name}.
     */
    readonly snapshotName: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot.html aws_kinesisanalyticsv2_application_snapshot}.
 */
export declare class Kinesisanalyticsv2ApplicationSnapshot extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot.html aws_kinesisanalyticsv2_application_snapshot} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: Kinesisanalyticsv2ApplicationSnapshotConfig);
    private _applicationName;
    get applicationName(): string;
    set applicationName(value: string);
    get applicationNameInput(): string;
    get applicationVersionId(): number;
    get id(): string;
    get snapshotCreationTimestamp(): string;
    private _snapshotName;
    get snapshotName(): string;
    set snapshotName(value: string);
    get snapshotNameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
