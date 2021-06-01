import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsPartitionConfig extends cdktf.TerraformMetaArguments {
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/partition.html aws_partition}.
 */
export declare class DataAwsPartition extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/partition.html aws_partition} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsPartitionConfig);
    get dnsSuffix(): string;
    get id(): string;
    get partition(): string;
    get reverseDnsPrefix(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
