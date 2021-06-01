import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEfsAccessPointsConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_access_points.html#file_system_id DataAwsEfsAccessPoints#file_system_id}.
     */
    readonly fileSystemId: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/efs_access_points.html aws_efs_access_points}.
 */
export declare class DataAwsEfsAccessPoints extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/efs_access_points.html aws_efs_access_points} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsEfsAccessPointsConfig);
    get arns(): string[];
    private _fileSystemId;
    get fileSystemId(): string;
    set fileSystemId(value: string);
    get fileSystemIdInput(): string;
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
